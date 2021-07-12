from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import AppointmentSerializer
from api.models import Appointment


# Create your views here.
class AppointmentView (viewsets.ModelViewSet):
    # permission_classes = [
    #     permissions.IsAuthenticated
    # ]
    # serializer_class = AppointmentSerializer

    # def get_queryset(self):
    #     return self.request.user.appointmentList.all()

    # def perform_create(self, serializer):
    #     serializer.save(owner=self.request.user)
    queryset = Appointment.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = AppointmentSerializer


