# coding=utf-8
import os
from setuptools import setup, find_packages
from version import get_version

version = get_version()

setup(name='gs.content.js.submit',
    version=version,
    description="JavaScript to disable the Submit button when it is clicked.",
    long_description=open("README.txt").read() + "\n" +
                      open(os.path.join("docs", "HISTORY.txt")).read(),
    classifiers=[
      "Development Status :: 4 - Beta",
      "Environment :: Web Environment",
      "Framework :: Zope2",
      "Intended Audience :: Developers",
      "License :: Other/Proprietary License",
      "Natural Language :: English",
      "Operating System :: POSIX :: Linux"
      "Programming Language :: JavaScript",
      "Topic :: Software Development :: Libraries :: JavaScript Modules",
      ],
    keywords='javascript submit form',
    author='Michael JasonSmith',
    author_email='mpj17@onlinegroups.net',
    url='http://groupserver.org/',
    license='GPL',
    packages=find_packages(exclude=['ez_setup']),
    namespace_packages=['gs','gs.content','gs.content.js'],
    include_package_data=True,
    zip_safe=True,
    install_requires=[
        'setuptools',
    ],
    entry_points="""
    # -*- Entry points: -*-
    """,
)
