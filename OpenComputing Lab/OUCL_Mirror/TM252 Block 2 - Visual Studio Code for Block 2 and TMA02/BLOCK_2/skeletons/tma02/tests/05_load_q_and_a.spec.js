import { test, expect } from '@playwright/test';

function generateRandomText(count) {
  const characters = "abcdefg1234567890";
  const buffer = [];
  for (let idx = 0; idx < count; idx++) {
    buffer.push(characters.charAt(Math.floor(Math.random() * characters.length)));
  }
  return buffer.join("");
}

function generateTestQandAData() {
  return [
    {
      id: Math.floor(Math.random() * 65536),
      question: `Question ${generateRandomText(8)}`,
      answer: generateRandomText(64),
    },
    {
      id: Math.floor(Math.random() * 65536),
      question: `Question ${generateRandomText(8)}`,
      answer: generateRandomText(64),
    },
    {
      id: Math.floor(Math.random() * 65536),
      question: `Question ${generateRandomText(8)}`,
      answer: generateRandomText(64),
    },
  ];
}

test.describe("loading the Q&A data", {
  tag: ["@tma02/q1/id/load-q-and-a", "@tma02/q1/marks/5", "@tma02/q1/title/Loading Q&A", "@tma02/q1/order/3"],
}, () => {
  test("the list of Q&A entries is empty if an empty response is sent from the server", {
    annotation: [
      {
        type: "feedback",
        description: "For the Q&A section, if the server sends an empty list, the definition list <dl> must have no children. However your solution contains data.",
      },
      {
        type: "url",
        description: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
      },
    ]
  }, async ({ page }) => {
    await page.route("*/**/api/q-and-a", async (route) => {
      await route.fulfill({ json: [] });
    });
    await page.goto('/');
    await expect(page.locator("#tm252-25b-tma02 .role-existing-q-and-a *")).toHaveCount(0);
  });

  test("the list of Q&A entries uses only <dt> and <dd> tags", {
    annotation: [
      {
        type: "feedback",
        description: "For the Q&A section, the list of elements in the <dl> element must only be <dt> or <dd> elements. In your solution there are other elements there.",
      },
      {
        type: "url",
        description: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
      },
      {
        type: "url",
        description: "https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement",
      },
    ]
  }, async ({ page }) => {
    const data = generateTestQandAData();
    await page.route("*/**/api/q-and-a", async (route) => {
      await route.fulfill({ json: data });
    });
    await page.goto('/');
    await expect(page.locator("#tm252-25b-tma02 .role-existing-q-and-a *")).toHaveCount(6);
    await expect(page.locator("#tm252-25b-tma02 .role-existing-q-and-a dt, #tm252-25b-tma02 .role-existing-q-and-a dd")).toHaveCount(6);
  });


  test("the list of Q&A entries contains the data sent by the server", {
    annotation: [
      {
        type: "feedback",
        description: "For the Q&A section, the data shown to the user must be in exactly the same order as the data sent by the server.",
      },
      {
        type: "url",
        description: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
      },
      {
        type: "url",
        description: "https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement",
      },
    ]
  }, async ({ page }) => {
    const data = generateTestQandAData();
    await page.route("*/**/api/q-and-a", async (route) => {
      await route.fulfill({ json: data });
    });
    await page.goto('/');
    await expect(page.locator("#tm252-25b-tma02 .role-existing-q-and-a *")).toHaveCount(6);
    await expect(page.locator("#tm252-25b-tma02 .role-existing-q-and-a *").nth(0)).toHaveText(data[0].question);
    await expect(page.locator("#tm252-25b-tma02 .role-existing-q-and-a *").nth(1)).toHaveText(data[0].answer);
    await expect(page.locator("#tm252-25b-tma02 .role-existing-q-and-a *").nth(2)).toHaveText(data[1].question);
    await expect(page.locator("#tm252-25b-tma02 .role-existing-q-and-a *").nth(3)).toHaveText(data[1].answer);
    await expect(page.locator("#tm252-25b-tma02 .role-existing-q-and-a *").nth(4)).toHaveText(data[2].question);
    await expect(page.locator("#tm252-25b-tma02 .role-existing-q-and-a *").nth(5)).toHaveText(data[2].answer);
  });
});
