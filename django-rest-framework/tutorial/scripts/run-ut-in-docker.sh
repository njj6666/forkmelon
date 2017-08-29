#! /bin/bash
sudo docker run --rm -v $(pwd):/tutorial -w /tutorial python ./scripts/unit-test.sh
