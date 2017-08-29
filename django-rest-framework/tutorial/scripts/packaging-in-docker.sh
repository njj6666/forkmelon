#! /bin/bash
sudo docker run --rm -v $(pwd):/tutorial -w /tutorial python python setup.py sdist
