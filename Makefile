.PHONY: install build diff

install:
	# Edit this to manually install dependencies if you are testing conflicting
	# dependencies
	#
	# pip install git+http://github.com/sphinx-doc/sphinx.git@1234
	pip install --user -r requirements.txt

build:
	sphinx-build -t html docs/ docs/_build/html/

diff:
	npm ci
	npm run happo-ci-circleci
	# Or if you need to test against a different base, you have to manually
	# specify that here:
	# BASE_BRANCH=sphinx3/docutils16 npm run happo-ci-circleci
