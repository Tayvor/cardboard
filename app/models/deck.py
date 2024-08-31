from .db import db, environment, SCHEMA


class Deck(db.Model):
  __tablename__ = 'decks'

  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(20), nullable=False)
