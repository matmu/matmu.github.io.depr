#!/usr/bin/perl
use strict;
use warnings;
use File::Basename;
use File::Spec;
use Sort::Naturally;

# Check if a directory argument was provided
die "Usage: $0 <directory_path>\n" unless @ARGV == 1;

my $dir = $ARGV[0];

# Create filename of markdown file
my $path = $dir;
$path =~ s/\/$//;
my @parts = split('/', $path);
my $markdown_file = $parts[-1].".md";

# Check if the directory exists
die "Error: Directory does not exist or is not accessible.\n" unless -d $dir;

# Open the directory
opendir(my $dh, $dir) or die "Cannot open directory '$dir': $!";

# Read all .jpg files from the directory
my @files = grep { /\.jpg$/i && -f "$dir/$_" } readdir($dh);

# Close the directory handle
closedir($dh);

# Hash to store the file organization
my %files_hash;

# Populate the hash
foreach my $file (@files) {
    # Extract the base name and the directory path
    my $filename = basename($file);

    # Parse the filename to determine if it's a thumbnail or a main image
    if ($filename =~ /^(.+?)(_th)?\.jpg$/i) {
        my $prefix = $1;
        my $type = $2 ? 'th' : 'url';

        # Store the filename in the hash under the appropriate type
        $files_hash{$prefix}{$type} = File::Spec->catfile($dir, $filename);
    }
}

# Output the hash to see the structure
# use Data::Dumper;
# print Dumper(\%files_hash);

# Open a new Markdown file to write
open(my $md, '>', "_posts/$markdown_file") or die "Could not open file: $!";

# Write the header of the Markdown file
print $md <<"END_HEADER";
---
title:
tags:
toc: true
toc_label: "Content"
toc_icon: "fas fa-file-alt"
gallery:
END_HEADER

# Iterate over each item in %files_hash to append gallery items
foreach my $key (nsort keys %files_hash) {
    my $th = $files_hash{$key}{th};
    my $url = $files_hash{$key}{url};

    print $md <<"END_GALLERY_ITEM";
  - image_path: $th
    url: $url
    alt:
    title:
END_GALLERY_ITEM
}

# Close the header block
print $md <<"END_FOOTER";
---

## Gallery

{% include gallery %}
END_FOOTER

close $md;
print "Markdown '_posts/$markdown_file' file created successfully.\n";
