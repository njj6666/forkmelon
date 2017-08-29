from django.conf.urls import url, include
from rest_framework import renderers
from rest_framework.routers import DefaultRouter
from snippets import views
import rest_framework.authtoken.views
from rest_framework.schemas import get_schema_view
from rest_framework.documentation import include_docs_urls
from django.contrib.auth import views as auth_views
from django.contrib import admin
admin.autodiscover()

schema_view = get_schema_view(title='DEMO API')

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'snippets', views.SnippetViewSet)
router.register(r'users', views.UserViewSet)
router.register(r'staffs', views.StaffViewSet)


urlpatterns = [
	url(r'^tokenAuth/$', views.TokenAuthView.as_view()), #the way for class-based view
	url(r'^getToken/', rest_framework.authtoken.views.obtain_auth_token), #built in view to generate token for user
    url(r'^', include(router.urls)),
    url(r'^schema/$', schema_view),
    url(r'^docs/', include_docs_urls(title='My API title')),
    url(r'^o/', include('oauth2_provider.urls', namespace='oauth2_provider')),
    url(r"^admin/", admin.site.urls),
    url(r'^accounts/login/$', auth_views.LoginView.as_view(template_name='snippets/login.html')),
]