const User = require('./model/User');

const resolvers = {
  Query: {
    users: async () => await User.find(),
    user: async (_, { id }) => await User.findById(id),
  },
  Mutation: {
    addUser: async (_, { name, email, mobile }) => {
      const user = new User({ name, email, mobile });
      await user.save();
      return user;
    },
    updateUser: async (_, { id, name, email, mobile }) => {
      const user = await User.findByIdAndUpdate(
        id,
        { name, email, mobile },
        { new: true }
      );
      return user;
    },
    deleteUser: async (_, { id }) => {
      const user = await User.findByIdAndDelete(id);
      return user;
    },
  },
};

module.exports = resolvers;
