getlink() {
    curl 'https://www.youtubeinmp3.com/fetch/?format=text&video='"$1" | sed 's/Title: .*<br\/>Length: .*<br\/>Link: //'
}
getlink $@
