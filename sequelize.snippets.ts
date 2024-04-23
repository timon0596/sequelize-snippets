
//find all where the result of connection of two columns is like a given string
model.findAll({where: {
        [Op.and]: [
          { IsArchived: false, IsDeleted: false },
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
