.PHONY: install build

install:
	# Edit this to manually install dependencies if you are testing conflicting
	# dependencies
	#
	# pip install git+http://github.com/sphinx-doc/sphinx.git@1234
	pip install --user docutils==0.18
	pip install --user git+https://github.com/sphinx-doc/sphinx.git@master
	pip install --user git+https://github.com/readthedocs/sphinx_rtd_theme.git@9c791fd

build:
	sphinx-build -t html docs/ docs/_build/html/
