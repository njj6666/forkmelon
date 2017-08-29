from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers
from snippets import views
#from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    url(r'^', include('snippets.urls')),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    
]

#urlpatterns = format_suffix_patterns(urlpatterns)