import { Router } from "express";
import dateFilter from "../../public/js/dateFilter.js";

const router = Router();

// Ruta para obtener fechas de los filtros
router.get("/get-dates", (req, res) => {
    const dates = dateFilter.getFilterDates(req);
    res.json(dates);
});

// Ruta para establecer fechas por mes y año
router.post("/set-dates-by-month", (req, res) => {
    const { month, year } = req.body;
    const { startDate, endDate } = dateFilter.setFilterDateByMonthAndYear(
        req,
        parseInt(month),
        parseInt(year)
    );
    res.json({ startDate, endDate });
});

// Ruta para establecer fechas por año
router.post("/set-dates-by-year", (req, res) => {
    const { year } = req.body;
    const { startDate, endDate } = dateFilter.setFilterDateByYear(
        req,
        parseInt(year)
    );
    res.json({ startDate, endDate });
});

export default router;