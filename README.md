# Student Project Tracker
A simple MERN application to add, display, update and delete student projects.


## Workflow and validation

The tracker demonstrates a complete CRUD workflow for student project delivery:

1. Add a project with its owner, title, status, and delivery details.
2. Review the project list as the operational source of truth.
3. Update progress as the project moves through its lifecycle.
4. Delete stale records deliberately rather than hiding them.

Validation focus:

- Confirm required fields before create and update operations.
- Keep status values consistent across the interface and API.
- Verify that the list refreshes after every mutation.
- Test the empty state and invalid-input state before release.

This keeps the project small, demonstrable, and aligned with delivery visibility and process improvement.
