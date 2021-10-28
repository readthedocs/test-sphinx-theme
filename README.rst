Test Sphinx Theme
=================

This repository is used internally to create different scenarios
to perform visual difference testing on `sphinx_rtd_theme`_.

Scenarios
---------

Each of the test scenarios is a branch that can be built independently from the
others. Each branch will be built on `Happo`_, so that we can see the visual
difference between the two branches. You can view the difference by opening a PR
to compare against a base branch, and `Happo`_ will create a report with the
difference between the two outputs.

Base scenarios
~~~~~~~~~~~~~~

There are a few base scenarios that you can branch from and base a PR against.
They represent a few of the supported configurations that we officially support.

You can browse `all the branches <https://github.com/readthedocs/test-sphinx-theme/branches/>`_
for a branch or tag to base your test case from.

Adding a new scenario to the repository
---------------------------------------

#. Create a new branch from one of the base scenario branches, using an
   appropiate name for your new test case
#. Add or modify the necessary files, such as installing different dependencies
#. Push your changes and open a pull request
#. Wait for `Happo`_ to generate a comparison between your new branch and the
   base branch.

.. _Happo: https://happo.io
.. _sphinx_rtd_theme: https://github.com/readthedocs/sphinx_rtd_theme
