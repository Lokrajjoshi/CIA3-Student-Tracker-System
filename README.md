# Student Project Tracker

A focused MERN workflow for adding, reviewing, updating and removing student project records.

## System signal

```
Client UI  →  CRUD API  →  persistence layer
   ↓             ↓              ↓
validation   status rules   project records
```

The tracker is designed as an operational view of project delivery: a user can see what exists, update its state, and remove stale records deliberately.

## Workflow and validation

1. Add a project with its owner, title, status and delivery details.
2. Review the project list as the operational source of truth.
3. Update progress as the project moves through its lifecycle.
4. Delete stale records deliberately rather than hiding them.

Validation focus:

- Confirm required fields before create and update operations.
- Keep status values consistent across the interface and API.
- Verify that the list refreshes after every mutation.
- Test empty, loading and invalid-input states before release.
- Confirm client and server errors are visible and actionable.

## Capability matrix

| Capability | What it demonstrates |
| --- | --- |
| CRUD workflow | Complete create, read, update and delete lifecycle |
| Process visibility | Clear project status and delivery tracking |
| Validation | Guardrails for required and invalid input |
| Reliability | Refresh and error handling after mutations |
| Analysis mindset | Turning project records into an operational view |

## Release checklist

- UI loads without console errors
- Create and update reject incomplete records
- Status values remain consistent end to end
- List refreshes after every mutation
- Empty and error states are readable
- Client and server remain independently understandable
- README workflow remains aligned with the implementation

