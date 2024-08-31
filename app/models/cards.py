from .db import db, environment, SCHEMA


class Cards(db.Model):
  __tablename__ = 'cards'

  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String, nullable=False, unique=True)
  legalities = db.Column(db.JSON)
  artist = db.Column(db.String)
  colors = db.Column(db.ARRAY(db.String))
  image_url = db.Column(db.String)
  mana_cost = db.Column(db.Integer)
  rarity = db.Column(db.String)
  set_abr = db.Column(db.String)
  set_name = db.Column(db.String)


  def to_dict(self):
    return {
      'id': self.id,
      'name': self.name,
    }
