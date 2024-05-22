


serve:
	LANG="en_US.UTF-8" LC_ALL="en_US.UTF-8" bundle exec jekyll serve --livereload -o --incremental

heic:
ifndef input_dir
	$(error input_dir is not set)
endif
ifndef output_dir
	$(error output_dir is not set)
endif
ifndef file_prefix
	$(error file_prefix is not set)
endif

	Rscript --vanilla scripts/convert_scale_heic.R $(input_dir) $(output_dir) $(file_prefix)
	ls -alht $(output_dir)


gallpost:
ifndef input_dir
	$(error input_dir is not set)
endif

	scripts/new_post_with_gallery.pl $(input_dir)
