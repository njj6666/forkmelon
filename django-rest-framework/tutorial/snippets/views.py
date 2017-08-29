from rest_framework import generics
from rest_framework import permissions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework import renderers
from rest_framework import viewsets
from rest_framework.decorators import detail_route

from snippets.models import Snippet, Staff
from django.contrib.auth.models import User

from snippets.serializers import SnippetSerializer, StaffSerializer
from snippets.serializers import UserSerializer
from snippets.permissions import IsOwnerOrReadOnly

#import for class-based view
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.views import APIView

from rest_framework.authtoken.models import Token

from oauth2_provider.contrib.rest_framework import OAuth2Authentication, TokenHasReadWriteScope, TokenHasScope

class SnippetViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    Additionally we also provide an extra `highlight` action.
    """
    queryset = Snippet.objects.all()
    serializer_class = SnippetSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly,)

    @detail_route(renderer_classes=[renderers.StaticHTMLRenderer])
    def highlight(self, request, *args, **kwargs):
        snippet = self.get_object()
        return Response(snippet.highlighted)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    authentication_classes = [OAuth2Authentication]
    permission_classes = [permissions.IsAuthenticated, TokenHasReadWriteScope]
    required_scopes = ['users']
    queryset = User.objects.all()
    serializer_class = UserSerializer


#Class-based view
class TokenAuthView(APIView):
    '''
    This is a class-based view, and use `TokenAuthentication` to auth.\n
    To access this api you need get your token from admin firstly\n
    This auth class will overwrite the configuration in project settings.py\n
    '''
    authentication_classes = [TokenAuthentication]
    permission_classes = (permissions.IsAuthenticated,)
    
    def get(self, request, format=None):
        #create token for specific user
        #token = Token.objects.get(user=request.user) 
        token = Token.objects.get(user=request.user)
        content = {
            'user': str(request.user),  # `django.contrib.auth.User` instance.
            'auth': str(request.auth),  # None
            'token': str(token)
        }
        return Response(content)


class StaffViewSet(viewsets.ModelViewSet):
    queryset = Staff.objects.all()
    serializer_class = StaffSerializer

