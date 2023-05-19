import DBProvider, { executeQuery, executeNonQuery } from "../dal/DBProvider";
const dbp = DBProvider();

const FeedbackController = {
    getFeedbacks: async (req, res) => {
        const queryString = "SELECT * FROM [Feedback]";
        const data = await executeNonQuery(queryString);
        return res.json(data);
    },
    insertFeedback: async (req, res) => {
        const feedback = req.body;
        console.log("feedback is being inserted", feedback);
        let queryString = `INSERT INTO [dbo].[Feedback]
                            ([message]
                              ,[email]
                              ,[star])
                        VALUES
                            (
                              '${feedback.message}',
                              '${feedback.email}', 
                              '${feedback.star}')`;
        const data = await executeNonQuery(queryString);
        console.log(data);

        return res.json({ feedback: feedback, rowAffected: data });
    },
    updateFeedback: async (req, res) => {
        const feedback = req.body;
        console.log(req.body);

        const queryString = `UPDATE [dbo].[Feedback]
                 SET [message] = '${feedback.message}'
                    ,[email] =  '${feedback.email}'
                    ,[star] =  '${feedback.star}'
                 WHERE [feedback_id] =  ${feedback.feedback_id}`;
        const data = await executeNonQuery(queryString);

        return res.json({
            feedback_id: feedback.feedback_id,
            rowAffected: data,
        })
    },
};

export default FeedbackController;
