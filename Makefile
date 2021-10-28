.PHONY: install build

install:
	# Edit this to manually install dependencies if you are testing conflicting
	# dependencies
	#
	# pip install git+http://github.com/sphinx-doc/sphinx.git@1234
	pip install --user -r requirements.txt

build:
	sphinx-build -t html docs/ docs/_build/html/
