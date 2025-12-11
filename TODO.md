# 📝 Project Roadmap & Todo List

Use this document to track progress, pick up tasks, and understand the current state of KinshipConnect.

**Legend:**
- ✅ **Complete**: Feature is implemented and working.
- 🚧 **In Progress**: Currently being worked on.
- ⏳ **Pending**: Planned but not started.
- 📦 **Backlog**: Future enhancements.

---

## 🌳 Domain: Tree Visualization & Navigation
*Focus: The main dashboard and graph interaction.*

- ✅ **Basic 3-Generation View**: Display Focus person, Parents, and Children.
- ✅ **Navigation**: Clicking a node refocusses the tree on that person.
- ✅ **Empty States**: Visual placeholders for missing parents/children with "Add" buttons.
- ⏳ **Canvas/Graph View**: Implement an infinite canvas (pan & zoom) to see more than 3 generations at once.
- ⏳ **Complex Relationships**: visual support for multiple spouses and step-siblings.
- ⏳ **Sibling View**: Display siblings of the focus person in the tree layout.

## ✍️ Domain: Data Entry & Management
*Focus: Forms, Validation, and CRUD operations.*

- ✅ **Add Person Form**: Create new profiles with basic details (Name, Dates, Location).
- ✅ **Relationship Linking**: Automatically link new profiles as Parent or Child of existing nodes.
- ⏳ **Edit Person**: Functionality to modify existing profile details (currently stubbed in UI).
- ⏳ **Delete Person**: Logic to remove a node and handle orphaned connections.
- ⏳ **Validation**: Ensure birth dates are valid and logic is consistent (e.g., child cannot be older than parent).

## 💾 Domain: Data Persistence & portability
*Focus: Saving data and importing/exporting.*

- ✅ **Global State**: `TreeContext` implementation for managing app-wide data.
- ⏳ **Local Storage Persistence**: Save tree data to browser `localStorage` to survive page reloads.
- ⏳ **GEDCOM Import**: Parser to read `.ged` files and populate the state.
- ⏳ **GEDCOM Export**: Generator to download current state as a standard GEDCOM file.
- 📦 **Cloud Sync**: (Future) Sync data to a backend database.

## 🤝 Domain: Collaboration & Auth
*Focus: User sessions and sharing.*

- ✅ **Simulated Auth**: Basic Login/Logout flow updating global user state.
- ✅ **Invite Page**: UI for sending email invitations.
- ⏳ **Invite Logic**: Generate unique share links with tokens.
- ⏳ **Permissions System**: Define `canEdit` vs `canView` logic in the Context.

## 🎨 Domain: UI/UX & Polish
*Focus: Styling, Accessibility, and responsiveness.*

- ✅ **Responsive Layout**: Mobile-friendly Navbar and Sidebar.
- ✅ **Dark Mode**: Full support via Tailwind `dark:` classes.
- ✅ **Accessibility**: Basic ARIA labels and keyboard navigation.
- ⏳ **Toast Notifications**: Feedback for actions (e.g., "Person Saved", "Invite Sent").
- ⏳ **Loading States**: Skeletons or spinners during data transitions.

---

## 🛠 How to Contribute

1.  **Pick a Task**: Select an item marked ⏳ **Pending**.
2.  **Branch**: Create a branch `feat/your-feature-name`.
3.  **Implement**: Follow the coding standards in `REQUIREMENTS.md`.
4.  **Test**: Ensure the app builds and runs without errors.
5.  **PR**: Submit a Pull Request referencing the task.
