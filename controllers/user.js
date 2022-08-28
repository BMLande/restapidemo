

module.exports =  {
    createUser : async (req, res, next) => {    
        const { firstName , lastName , mobile , password  } = req.body;
        res.send('usere created')
    },

    deleteUser : async (req, res, next) => {    
        const { firstName , lastName , mobile , password  } = req.body;
        res.send('usere created')
    }
};