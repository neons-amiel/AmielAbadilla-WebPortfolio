from django.db import models

# Create your models here.

class Tech(models.Model):
    name = models.CharField(max_length=100)
    logo = models.ImageField(upload_to='techstack_images/')

    def __str__(self):
        return self.name
