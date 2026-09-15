import { test, expect } from '@playwright/test';

function generateRandomText(count) {
  const characters = "abcdefg1234567890";
  const buffer = [];
  for (let idx = 0; idx < count; idx++) {
    buffer.push(characters.charAt(Math.floor(Math.random() * characters.length)));
  }
  return buffer.join("");
}

async function extractMultipartFormData(request) {
  const fields = {};
  const contentType = await request.headerValue("Content-Type");
  if (contentType.startsWith("multipart/form-data; boundary=")) {
    const boundary = "--" + contentType.substring(30);
    let fieldName = null;
    let fieldValue = [];
    for (let line of request.postData().split("\n")) {
      line = line.trim();
      if (line.startsWith(boundary)) {
        if (fieldName) {
          fields[fieldName] = fieldValue.join("\n");
        }
        fieldName = null;
        fieldValue = [];
      } else if (line.startsWith('Content-Disposition: form-data; name="')) {
        fieldName = line.substring(38);
        fieldName = fieldName.substring(0, fieldName.length - 1);
        console.log(fieldName);
      } else if (line !== "") {
        fieldValue.push(line);
      }
    }
  }
  return fields;
}

test.describe("submitting a new question", {
  tag: ["@tma02/q1/id/send-question", "@tma02/q1/marks/4", "@tma02/q1/title/Submit Question", "@tma02/q1/order/4"],
}, () => {
  test('the "Ask a question" form does not cause the page to reload.', {
    annotation: [
      {
        type: "feedback",
        description: 'When the "Ask a question" form is submitted, the event handler must prevent the default action of submitting the form to the server from happening. In your code the default action is still happening, which causes the whole page to reload.',
      },
      {
        type: "url",
        description: "https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault",
      },
    ]
  }, async ({ page }) => {
    await page.goto('/');
    await page.locator("#tm252-25b-tma02 .role-toggle-button").click();
    await expect(
      page.locator("#tm252-25b-tma02 .card-body")
      ).not.toHaveClass(/d-none/);

    const randomValue = generateRandomText(32);
    await page.locator("#tm252-25b-tma02 .role-new-question").evaluate((el, randomValue) => {
      el.setAttribute("data-test-no-submit", randomValue);
    }, randomValue);
    await page.locator("#tm252-25b-tma02 .role-new-question [type=submit]").click();
    await expect(page.locator("#tm252-25b-tma02 .role-new-question")).toHaveAttribute("data-test-no-submit", randomValue);
  });

    test('the "Ask a question" form is submitted and the data sent to the server as a POST request.', {
    annotation: [
      {
        type: "feedback",
        description: 'When the "Ask a question" form is submitted, the form must be sent as a POST request.',
      },
      {
        type: "url",
        description: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
      },
    ]
  }, async ({ page }) => {
    await page.goto('/');
    await page.locator("#tm252-25b-tma02 .role-toggle-button").click();
    await expect(
      page.locator("#tm252-25b-tma02 .card-body")
    ).not.toHaveClass(/d-none/);

    const randomValue = generateRandomText(32);

    const requestPromise = page.waitForRequest((request) => {
      return request.url().includes("/api/q-and-a") && request.method() === "POST";
    }, { timeout: 5000 });

    await page.locator("#tm252-25b-tma02 .role-new-question textarea").fill(randomValue);
    await page.locator("#tm252-25b-tma02 .role-new-question [type=submit]").click();

    await requestPromise;
  });


  test('the "Ask a question" form is submitted and the data sent to the server as a multipart/form-data encoded POST request.', {
    annotation: [
      {
        type: "feedback",
        description: 'When the "Ask a question" form is submitted, the form must be sent as a POST request, with the data sent as FormData.',
      },
      {
        type: "url",
        description: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
      },
      {
        type: "url",
        description: "https://developer.mozilla.org/en-US/docs/Web/API/FormData",
      },
    ]
  }, async ({ page }) => {
    await page.goto('/');
    await page.locator("#tm252-25b-tma02 .role-toggle-button").click();
    await expect(
      page.locator("#tm252-25b-tma02 .card-body")
    ).not.toHaveClass(/d-none/);

    const randomValue = generateRandomText(32);

    const requestPromise = page.waitForRequest((request) => {
      return request.url().includes("/api/q-and-a") && request.method() === "POST";
    }, { timeout: 5000 });

    await page.locator("#tm252-25b-tma02 .role-new-question textarea").fill(randomValue);
    await page.locator("#tm252-25b-tma02 .role-new-question [type=submit]").click();

    const request = await requestPromise;
    const fields = await extractMultipartFormData(request);

    expect(fields.question).toBe(randomValue);
  });

});
