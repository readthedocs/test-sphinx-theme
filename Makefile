.PHONY: install build diff

install:
	# Edit this to manually install dependencies if you are testing conflicting
	# dependencies
	#
	# pip install git+http://github.com/sphinx-doc/sphinx.git@1234
	pip install --user docutils==0.18b1
	pip install --user git+https://github.com/sphinx-doc/sphinx.git@6472fb92244f2c8384e0a1b299109398e0e10a52
	pip install --user git+https://github.com/readthedocs/sphinx_rtd_theme.git@9c791fd

build:
	sphinx-build -t html docs/ /tmp/html/

diff:
	npm ci
	npm run happo-ci-circleci
	# Or if you need to test against a different base, you have to manually
	# specify that here:
	# BASE_BRANCH=sphinx3/docutils16 npm run happo-ci-circleci