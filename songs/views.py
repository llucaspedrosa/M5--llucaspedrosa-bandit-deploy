from django.shortcuts import get_object_or_404
from rest_framework.views import APIView, Response, status
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Song
from rest_framework.pagination import PageNumberPagination
from .serializers import SongSerializer
from albums.models import Album
from rest_framework import generics
class SongView( generics.ListCreateAPIView, PageNumberPagination):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]
    def get_queryset(self):
        id =  self.kwargs["pk"]
        songs = Song.objects.filter(album_id=id)
        return songs
    
    serializer_class = SongSerializer
    
    def perform_create(self, serializer) -> None:
        
        serializer.save(album_id=self.kwargs["pk"])
        
   