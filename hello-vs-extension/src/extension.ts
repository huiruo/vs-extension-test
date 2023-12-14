// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

let timerID: NodeJS.Timeout;

function alarmClockTimer(work_min: number = 25, rest_min: number = 5): void {
	vscode.window.showInformationMessage(`工作闹钟已启动：您将连续沉浸式工作 ${work_min} 分钟，休息 ${rest_min} 分钟`);

	timerID = setTimeout(() => {
		vscode.window.showInformationMessage(`休息 ${rest_min} 分钟，起来走走，伸伸懒腰`);

		timerID = setTimeout(() => {
			vscode.window.showInformationMessage('休息时间结束，下一轮循环，开始工作...');
			alarmClockTimer(work_min, rest_min);
			// 	}, rest_min * 60 * 1000);
			// }, work_min * 60 * 1000);
		}, rest_min * 2 * 1000);
	}, work_min * 5 * 1000);
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "hello-vs-extension" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('hello-vs-extension.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		console.log('hello-ruo-2');
		vscode.window.showInformationMessage('Hello World 2!');
	});

	context.subscriptions.push(disposable);

	let cmdAlarmClock = vscode.commands.registerCommand('helloworld.alarmClock', (work_min: number, rest_min: number) => {
		alarmClockTimer(work_min, rest_min);
	});

	let cmdAlarmClockShutdown = vscode.commands.registerCommand('helloworld.alarmClock-shutdown', () => {
		if (timerID) {
			clearTimeout(timerID);
			vscode.window.showInformationMessage('工作闹钟已关闭');
		}
	});

	context.subscriptions.push(cmdAlarmClock);
	context.subscriptions.push(cmdAlarmClockShutdown);
}

// This method is called when your extension is deactivated
export function deactivate() { }
