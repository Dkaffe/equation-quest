from django.urls import path
from .views import MyApiView

urlpatterns = [
    path('my-endpoint/', MyApiView.as_view(), name='my-endpoint'),
]