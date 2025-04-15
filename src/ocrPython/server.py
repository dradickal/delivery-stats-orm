import socket
import json

def handle_client_connection(client_socket):
    request = client_socket.recv(1024)
    data = json.loads(request.decode())
    response = {"message": f"Hello, {data['name']}!"}
    client_socket.send(json.dumps(response).encode())
    client_socket.close()

def main():
    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server.bind(('127.0.0.1', 7070))
    server.listen(5)
    print('Listening on port 7070')

    while True:
        try:
            client_sock, address = server.accept()
            handle_client_connection(client_sock)
        except KeyboardInterrupt:
            print('\nClosing server')
            server.close()
            break

if __name__ == "__main__":
    main()