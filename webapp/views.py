from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic.base import View
from django.template.loader import get_template



class HomeView(View):

  def get(self, request, *args, **kwargs):
    template = get_template('home.html')
    return HttpResponse(template.render(request))

# Create your views here.
