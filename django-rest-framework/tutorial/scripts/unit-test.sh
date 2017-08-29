#! /bin/bash
#CMD_PATH=` dirname $0`
#cd $CMD_PATH
#echo `pwd`
pip install -r /tutorial/requirements.txt
python /tutorial/manage.py test
