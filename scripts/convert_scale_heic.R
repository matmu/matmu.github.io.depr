#!/usr/bin/env Rscript

suppressMessages(library(magick))

args = commandArgs(trailingOnly=TRUE)

input_dir = args[1];
output_dir = args[2];
file_prefix = args[3];

message("input_dir: ", input_dir)
message("output_dir: ", output_dir)
message("file_prefix: ", file_prefix)

if(!dir.exists(input_dir)) stop("input_dir does not exist")
if(!dir.exists(output_dir)) dir.create(output_dir)
if(is.na(file_prefix) | nchar(file_prefix) == 0) stop("file_prefix needs to be specified")

files = sort(list.files(path = input_dir, pattern = "\\.HEIC|\\.jpg|\\.jpeg", full.names = TRUE, ignore.case = TRUE))

res = lapply(1:length(files), function(i){

    f = files[i]

    message("Process ", f)

    # https://cran.r-project.org/web/packages/magick/vignettes/intro.html

    img = image_read(f)
    info = image_info(img)

    img_jpg_scaled = NULL
    img_jpg_scaled_th = NULL
    if(info$width > info$height){
        img_jpg_scaled = image_scale(img, "800x")
    } else {
        img_jpg_scaled = image_scale(img, "x800")
    }

    img_jpg_scaled_th = image_scale(img, "180x")

    image_write(img_jpg_scaled, path = file.path(output_dir, paste0(file_prefix, "_", i, ".jpg")), format = "jpg", quality = 75)
    image_write(img_jpg_scaled_th, path = file.path(output_dir, paste0(file_prefix, "_", i, "_th.jpg")), format = "jpg", quality = 75)
})
