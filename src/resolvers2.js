const Task = require("./models/task");

const resolvers = {

    Query: {
        hello: () => 'Hello world!',
        getAllTasks: async () => {
            const tasks = await Task.find();
            return tasks;
        },
    },

    Mutation: {
        createTask: async (parent, args, context, info) => {
            const { title, description } = args;
            const newTask = new Task({title, description});
            await newTask.save();
            console.log(parent, args, context, info);
            return newTask;
        }
    }
    
}

module.exports = resolvers;