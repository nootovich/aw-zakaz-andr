# Generated by Django 5.0.3 on 2024-03-09 10:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0003_alter_post_image_alter_post_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='content',
            field=models.TextField(blank=True, default=''),
        ),
        migrations.AlterField(
            model_name='post',
            name='image',
            field=models.ImageField(default='', upload_to='media/'),
        ),
    ]
