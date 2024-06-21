#!/bin/bash

# Variables
HOST=$FTP_HOST
USER=$FTP_USER
PASS=$FTP_PASS
REMOTE_DIR=$FTP_REMOTE_DIR
LOCAL_DIR='.'

# Use lftp for FTP/SFTP
lftp -f "
open $HOST
user $USER $PASS
lcd $LOCAL_DIR
mirror --reverse --delete --verbose $LOCAL_DIR $REMOTE_DIR
bye
"
