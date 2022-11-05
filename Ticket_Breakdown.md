# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Acceptance criteria

Given a Facilty
When admin tries to save an agent shift with a custom agent id
Then report generated should also have the custom agent id.

### Implementation Note

-  Create a migration script to alter shift table with the column agent_id
-  Update ShiftDTO to accept agent_id.  agent_id an optional string. Validate agent_id on ShiftDTO
-  Update ShiftService if necessary to pass agent_id to repositoryDAO.
-  Update ShiftController and ShiftService to support updating shit with agent_id
-  Update ReportService to include agent_id in report response
-  Update unit test.


### Test Data
- Create a new shift with payload {shift:"Morning",agent_id:"Pluto123"}


### QA Tips
- Try creating a new shift and also updating old shit with an agent_id
