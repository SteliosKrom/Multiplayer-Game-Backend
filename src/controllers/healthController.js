function getHealth(req, res)
{
    res.json({
        status: "OK",
        message: "Backend is healthy and running!"
    });
};

export { getHealth };