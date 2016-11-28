from django.conf.urls import url
from django.views.decorators.csrf import csrf_exempt

from . import views


urlpatterns = [
    url(r'^$', csrf_exempt(views.HomeView.as_view()), name='index'),
]
