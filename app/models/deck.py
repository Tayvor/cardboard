from .db import db, environment, SCHEMA, add_prefix_for_prod


class Deck(db.Model):
  __tablename__ = 'decks'

  if environment == 'production':
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(30), nullable=False)
  user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)

  user = db.relationship('User', back_populates='decks')
