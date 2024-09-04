from .db import db, environment, SCHEMA


class Card(db.Model):
  __tablename__ = 'cards'

  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String, nullable=False, unique=True)
  legalities = db.Column(db.JSON, nullable=False)
  artist = db.Column(db.String, nullable=False)
  colors = db.Column(db.String, nullable=False)
  image_url = db.Column(db.String, nullable=False)
  mana_cost = db.Column(db.Integer, nullable=False)
  rarity = db.Column(db.String, nullable=False)
  set_code = db.Column(db.String, nullable=False)
  set_name = db.Column(db.String, nullable=False)


  def to_dict(self):
    return {
      'id': self.id,
      'name': self.name,
      'legalities': self.legalities,
      'artist': self.artist,
      'colors': self.colors,
      'image_url': self.image_url,
      'mana_cost': self.mana_cost,
      'rarity': self.rarity,
      'set_code': self.set_code,
      'set_name': self.set_name,
    }
