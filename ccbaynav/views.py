# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

from django.db import models

# Create your views here.
'''
This class will let admin users add stations to the map
Class Instance Variables:
    :param sName = Name of the station 
    :param sLatitude: Latitude of the station
    :param sLongitude: Longitude of the station
'''


class Map(models.Model):
    mName = models.CharField(max_length=255)
    mLatitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    mLongitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
