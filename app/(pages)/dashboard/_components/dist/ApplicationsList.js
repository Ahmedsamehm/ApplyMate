"use client";
"use strict";
exports.__esModule = true;
var badge_1 = require("@/app/components/ui/badge");
var JobApplicationsProvider_1 = require("@/app/context/JobApplicationsProvider ");
var getStatusColor_1 = require("@/utils/getStatusColor");
var card_1 = require("@/app/components/ui/card");
var react_1 = require("react");
var SelectedJob_1 = require("./SelectedJob");
var nextjs_1 = require("@clerk/nextjs");
var ApplicationsList = function () {
    var _a = JobApplicationsProvider_1.useJobApplicationsContext(), isSheetOpen = _a.isSheetOpen, setIsSheetOpen = _a.setIsSheetOpen, jobApplications = _a.jobApplications;
    var session = nextjs_1.useSession().session;
    var _b = react_1.useState(null), selectedJob = _b[0], setSelectedJob = _b[1];
    console.log(session);
    var applications = [
        { title: "applied", color: "text-blue-600", data: jobApplications.applied },
        { title: "pending", color: "text-yellow-600", data: jobApplications.pending },
        { title: "accepted", color: "text-green-600", data: jobApplications.accepted },
        { title: "rejected", color: "text-red-600", data: jobApplications.rejected },
    ];
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "grid w-full max-w-7xl mx-auto gap-4 sm:grid-cols-3 lg:grid-cols-4" }, applications.map(function (application) { return (React.createElement(card_1.Card, { key: application.title, className: "w-full hover:border-blue-400/80 transition outline-2 dark:outline-0" },
            React.createElement(card_1.CardHeader, null,
                React.createElement(card_1.CardTitle, { className: application.color + " font-bold text-xl flex gap-2 capitalize" }, application.title),
                React.createElement(card_1.CardAction, null, "Status")),
            React.createElement(card_1.CardContent, null,
                React.createElement("ul", { className: "flex flex-col  max-h-[40vh] overflow-y-auto" }, application.data.map(function (item) {
                    var id = item.id, companyName = item.companyName, position = item.position, date = item.date, status = item.status;
                    var statusColor = getStatusColor_1.getStatusColor(status);
                    return (React.createElement("li", { key: id, className: "flex justify-between items-center cursor-pointer hover:bg-muted/50 rounded-md px-2 ", onClick: function () {
                            setSelectedJob(item);
                            setIsSheetOpen(true);
                        } },
                        React.createElement("div", { className: "flex flex-col" },
                            React.createElement("span", null, companyName),
                            React.createElement("span", { className: "text-sm text-muted-foreground" }, position),
                            React.createElement("span", { className: "text-sm text-muted-foreground" }, date)),
                        React.createElement(badge_1.Badge, { className: statusColor.text + " " + statusColor.bg + " px-2 py-1 rounded-md capitalize", variant: "outline" }, status)));
                }))))); })),
        selectedJob && React.createElement(SelectedJob_1["default"], { selectedJob: selectedJob, isSheetOpen: isSheetOpen, setIsSheetOpen: setIsSheetOpen })));
};
exports["default"] = ApplicationsList;
