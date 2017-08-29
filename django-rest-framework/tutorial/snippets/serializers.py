from rest_framework import serializers

from snippets.models import Snippet, LANGUAGE_CHOICES, STYLE_CHOICES, Staff
from django.contrib.auth.models import User

class SnippetSerializer(serializers.HyperlinkedModelSerializer):
	owner = serializers.ReadOnlyField(source='owner.username')
	highlight = serializers.HyperlinkedIdentityField(view_name='snippet-highlight', format='html')
	custom = serializers.IntegerField(default=100)
	class Meta:
		model = Snippet
		fields = ('url', 'id', 'highlight', 'owner',
			'title', 'code', 'linenos', 'language', 'style', 'custom')


class UserSerializer(serializers.HyperlinkedModelSerializer):
	snippets = serializers.HyperlinkedRelatedField(many=True, view_name='snippet-detail', read_only=True)

	class Meta:
		model = User
		fields = ('url', 'id', 'username', 'snippets')

class StaffSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Staff
		fields = ('name','address','id')