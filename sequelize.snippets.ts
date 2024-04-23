
//find all rows where the result of connection of two columns is like a given string and not isarchived and not isdeleted 
model.findAll({where: {
        [Op.and]: [
        //regular "where" section block 
          { IsArchived: false, IsDeleted: false },
        //condition to find rows where the result of connection of two columns is like a given string
          connection.where(
            connection.fn(
              'concat',
              connection.col('Orders.incoterms'),
              ' ',
              connection.col('DeliveryPlace.Name'),
            ),
            {
              [Op.like]: '%' + 'John' + '%',
            },
          ),
        ],
      }})
