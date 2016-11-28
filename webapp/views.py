from django.shortcuts import render
from django.shortcuts import render_to_response
from django.http import HttpResponse, HttpResponseRedirect
from django.views.generic.base import View


class HomeView(View):

  def get(self, request, *args, **kwargs):
    return HttpResponse("Hello World!!!!")
    # return HttpResponseRedirect('/templates/home')
    # return render(request, 'home.html', {})

# Create your views here.
