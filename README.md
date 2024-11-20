# event
queries:
Get artist by event ID
http://localhost:3000/api/event/2/artists

Get artist by style ID:
http://localhost:3000/api/style/2/artists/

Get events in a given city (ID):
http://localhost:3000/api/city/1/events


Add a style (byID) to user's profile
http://localhost:3000/api/user/profile/style/:id


Add favorite style to user (that is logged in):
http://localhost:3000/api/users/profile/styles

parameters in body:
{
    "name": "Techno"
}
