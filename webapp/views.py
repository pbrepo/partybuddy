from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic.base import View



class HomeView(View):

  def get(self, request, *args, **kwargs):
    return HttpResponse("Hello World")

# Create your views here.
