#This template has been created to accompany the Week-19 Simple Web Server work on the VCE
#Note: The code in this template will not run without replacing the values surrounded by chevrons for
#      more appropriate values. You can use the material in the VCE for examples on how to do this.
#  This script can be executed using 'python3 ./skeletons/week_19_simple_web_server-skeleton.py' in the console

from http.server import HTTPServer, BaseHTTPRequestHandler

def handle_request(self):
    self.send_response(200)  # note response code 200 is 'ok'
    self.send_header("Content-type", "text/plain")  # there are different types of content, you may not always want to use text/plain
    self.end_headers()
    self.wfile.write(b"hello")  # include the response default text here


def handle_greeting(self):
    self.send_response(200)
    self.send_header("Content-type", "text/plain")
    self.end_headers()
    self.wfile.write(b"A message from Python")

class SimpleHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/":
            handle_request(self)
        elif self.path == "/greeting":
            handle_greeting(self)
        else:
            self.send_response(404)
            self.send_header("Content-type", "text/plain")
            self.end_headers()
            self.wfile.write(b"Not Found")

def serve():
    server = HTTPServer(('localhost', 8000), SimpleHandler)
    print("Serving on port 8000...")
    server.serve_forever()

if __name__ == '__main__':
    serve()
