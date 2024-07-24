from flask.cli import AppGroup
from app.models.db import environment
from .users import seed_users, undo_users



# add seed command
seed_commands = AppGroup('seed')

# add command 'flask seed all'
@seed_commands.command('all')
def seed():
  if environment == "production":
    # undo previous seeds first
    undo_users()
  seed_users()


# add 'undo' command
@seed_commands.command('undo')
def undo():
  undo_users()
