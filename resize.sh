

for i in ./public/images/*.JPG; do 
    convert "$i" -resize 20% "../../dummy/${i##*/}"
done
