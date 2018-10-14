## Linking Novum API
## This app provides a way for linking sections of different books to each other with the goal to create a hyper text.

### TODOs
1. Change links to sections. The section being an object that holds the startVerse, the endVerse, the book and an array of links to other sections.
    1. The problem with this approach is that I don't how to save additional information for the link. In a SQL database I would just put that information on a pivot table.


### Questions
1. Can you simulate a pivot table in MongoDB/Mongoose?
    1. Try out rest-hapi. It seems to provide just such a functionality.
2. 