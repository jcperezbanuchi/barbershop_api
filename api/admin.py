from django.contrib import admin

# Register your models here.
from .models import Appointment

class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('firstname', 'lastname', 'barber', 'phone', 'email', 'contact', 'date', 'time', 'comment')

admin.site.register(Appointment, AppointmentAdmin)    